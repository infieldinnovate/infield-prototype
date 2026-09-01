"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Star,
  X,
  CircleCheck as CheckCircle2,
  CircleAlert as AlertCircle,
  Send,
  MessageSquare,
} from "lucide-react";
import { reviewSchema, type ReviewFormData } from "@/lib/review-validations";
import { supabase } from "@/lib/supabase-client";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";
import InputField from "@/components/forms/form_elements/input";
import SelectField from "@/components/forms/form_elements/select";
import styles from "./ReviewModal.module.scss";

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
}

export function ReviewModal({ open, onClose }: ReviewModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [hoverRating, setHoverRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      rating: 0,
    },
  });

  const rating = watch("rating");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [open, onClose]);

  if (!open) return null;

  const handleRatingClick = (value: number) => {
    setValue("rating", value, { shouldValidate: true });
  };

  const onSubmit = async (data: ReviewFormData) => {
    setSubmitError(null);
    try {
      const { error } = await supabase.from("reviews").insert({
        name: data.name,
        email: data.email,
        rating: data.rating,
        service: data.service,
        title: data.title,
        body: data.body,
      });

      if (error) throw error;

      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Failed to submit review. Please try again.",
      );
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setSubmitError(null);
    reset();
    onClose();
  };

  const serviceOptions = SERVICES.map((s) => ({
    value: s.name,
    label: s.name,
  }));

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
      >
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close review form"
          type="button"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className={styles.success} role="status">
            <div className={styles.successIcon}>
              <CheckCircle2 size={48} />
            </div>
            <h3 className={styles.successTitle}>Thank You!</h3>
            <p className={styles.successMessage}>
              Your review has been submitted successfully. It will appear on our
              site once approved by our team.
            </p>
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.headerIcon}>
                <MessageSquare size={32} />
              </div>
              <h3 id="review-modal-title" className={styles.headerTitle}>
                Review Our Services
              </h3>
              <p className={styles.headerDesc}>
                Share your experience working with Infield Innovations. Your
                feedback helps us improve and helps others choose the right
                partner.
              </p>
            </div>

            <div className={styles.body}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-column"
                noValidate
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {/* Star Rating */}
                <div className={styles.ratingField}>
                  <span className={styles.ratingLabel}>Your Rating *</span>
                  <div className={styles.ratingStars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`${styles.starBtn} ${
                          (hoverRating || rating) >= star
                            ? styles.starActive
                            : ""
                        }`}
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                      >
                        <Star
                          size={32}
                          fill={
                            (hoverRating || rating) >= star
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>
                    ))}
                  </div>
                  {errors.rating && (
                    <p className={styles.ratingError}>
                      {errors.rating.message}
                    </p>
                  )}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1.25rem",
                  }}
                >
                  <InputField
                    register={register}
                    name="name"
                    label="Full Name"
                    required
                    placeholder="John Doe"
                    error={errors.name}
                  />
                  <InputField
                    register={register}
                    name="email"
                    label="Email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    error={errors.email}
                  />
                </div>

                <SelectField
                  register={register}
                  name="service"
                  label="Service Reviewed"
                  required
                  placeholder="Select a service"
                  options={serviceOptions}
                  error={errors.service}
                />

                <InputField
                  register={register}
                  name="title"
                  label="Review Title"
                  required
                  placeholder="Summarize your experience in a few words"
                  error={errors.title}
                />

                <InputField
                  register={register}
                  name="body"
                  label="Your Review"
                  as="textarea"
                  required
                  placeholder="Tell us about your experience working with us..."
                  rows={5}
                  error={errors.body}
                />

                {submitError && (
                  <div className={styles.error} role="alert">
                    <AlertCircle size={20} />
                    <span>{submitError}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  fullWidth
                  leftIcon={<Send size={18} />}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

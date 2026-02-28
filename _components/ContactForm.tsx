"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal, Form, Input, Select, ConfigProvider, theme } from "antd";
import {
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  X,
  CheckCircle2,
} from "lucide-react";

const { TextArea } = Input;
const { Option } = Select;

// ── Types ─────────────────────────────────────────────────────────────────────

type FormValues = {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
};

// ── Ant Design dark theme tokens matching the portfolio palette ───────────────

const antdTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#f97316",
    colorBgContainer: "#0f1629",
    colorBgElevated: "#0f1629",
    colorBorder: "#1e293b",
    colorBorderSecondary: "#1e293b",
    colorText: "#e2e8f0",
    colorTextSecondary: "#94a3b8",
    colorTextPlaceholder: "#475569",
    colorFill: "#1e293b",
    colorFillSecondary: "#1e293b",
    borderRadius: 10,
    fontFamily: "inherit",
    controlHeight: 44,
    fontSize: 14,
  },
  components: {
    Input: {
      colorBgContainer: "#0d1424",
      colorBorder: "#1e293b",
      hoverBorderColor: "#f97316",
      activeBorderColor: "#f97316",
      activeShadow: "0 0 0 2px rgba(249,115,22,0.15)",
    },
    Select: {
      colorBgContainer: "#0d1424",
      colorBorder: "#1e293b",
      optionSelectedBg: "rgba(249,115,22,0.12)",
      colorBgElevated: "#0d1424",
    },
    Modal: {
      contentBg: "#080e1c",
      headerBg: "#080e1c",
      titleColor: "#f1f5f9",
      colorIcon: "#64748b",
      colorIconHover: "#f97316",
    },
  },
};

// ── Success screen ────────────────────────────────────────────────────────────

const SuccessView = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className="flex flex-col items-center justify-center py-12 text-center gap-5"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
      className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center"
    >
      <CheckCircle2 className="w-10 h-10 text-orange-400" />
    </motion.div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
      <p className="text-slate-400 text-sm max-w-xs">
        Thanks for reaching out. I'll get back to you within 24–48 hours.
      </p>
    </div>

    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClose}
      className="mt-2 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all text-sm"
    >
      Close
    </motion.button>
  </motion.div>
);

// ── Failure screen ────────────────────────────────────────────────────────────

const FailureView = ({
  onRetry,
  onClose,
  errorMessage,
}: {
  onRetry: () => void;
  onClose: () => void;
  errorMessage: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    className="flex flex-col items-center justify-center py-12 text-center gap-5"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
      className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-rose-500/20 border border-red-500/30 flex items-center justify-center"
    >
      {/* Animated X mark */}
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-10 h-10"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="#f87171"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        />
        <motion.path
          d="M15 9L9 15M9 9l6 6"
          stroke="#f87171"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />
      </motion.svg>
    </motion.div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-2">
        Something went wrong
      </h3>
      <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
        {errorMessage ||
          "Your message couldn't be sent. Please try again or reach out directly."}
      </p>
    </div>

    {/* Direct email fallback */}
    <a
      //   href="mailto:hello@johndoe.dev"
      className="text-xs text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
    >
      Or email me directly →
    </a>

    <div className="flex items-center gap-3 mt-1">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onClose}
        className="px-6 py-3 rounded-xl font-semibold text-slate-300 border-2 border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all text-sm"
      >
        Dismiss
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onRetry}
        className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all text-sm"
      >
        Try again
      </motion.button>
    </div>
  </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────

const ContactForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form] = Form.useForm<FormValues>();

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => {
      form.resetFields();
      setSubmitted(false);
      setFailed(false);
      setErrorMessage("");
    }, 300);
  };

  const handleRetry = () => {
    setFailed(false);
    setErrorMessage("");
  };

  const handleSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setFailed(false);
    setErrorMessage("");
    try {
      const res: any = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data?.success === false) {
        throw new Error(
          data?.message || "An unexpected error occurred. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.log("Error", error);
      const message =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Trigger button ── */}
      {/* <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all text-sm"
      >
        <MessageSquare className="w-4 h-4" />
        Get in touch
        <Sparkles className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
      </motion.button> */}

      {/* ── Ant Design Modal with custom dark theme ── */}
      <ConfigProvider theme={antdTheme}>
        <Modal
          open={open}
          onCancel={closeModal}
          footer={null}
          width={560}
          centered
          closeIcon={
            <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-800 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all">
              <X className="w-4 h-4 text-slate-400 hover:text-orange-400" />
            </span>
          }
          styles={{
            content: {
              padding: 0,
              background: "#080e1c",
              border: "1px solid #1e293b",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow:
                "0 25px 60px -10px rgba(249,115,22,0.15), 0 0 0 1px rgba(249,115,22,0.08)",
            },
            mask: {
              backdropFilter: "blur(6px)",
              background: "rgba(2,6,18,0.75)",
            },
          }}
        >
          {/* ── Modal inner layout ── */}
          <div>
            {/* Top gradient band */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />

            {/* Header */}
            <div className="relative px-8 pt-7 pb-5 border-b border-slate-800/60">
              {/* Ambient glow */}
              <div className="absolute -top-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/25 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-0.5">
                    Let's talk
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Fill out the form and I'll get back to you within 24–48
                    hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-6">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <SuccessView key="success" onClose={closeModal} />
                ) : failed ? (
                  <FailureView
                    key="failure"
                    onRetry={closeModal}
                    onClose={closeModal}
                    errorMessage={errorMessage}
                  />
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={handleSubmit}
                      requiredMark={false}
                      className="space-y-0"
                    >
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                        <Form.Item
                          name="name"
                          label={
                            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                              Name
                            </span>
                          }
                          rules={[
                            {
                              required: true,
                              message: "Please enter your name",
                            },
                          ]}
                        >
                          <Input placeholder="John Doe" />
                        </Form.Item>

                        <Form.Item
                          name="email"
                          label={
                            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                              Email
                            </span>
                          }
                          rules={[
                            {
                              required: true,
                              message: "Please enter your email",
                            },
                            {
                              type: "email",
                              message: "Please enter a valid email",
                            },
                          ]}
                        >
                          <Input placeholder="john@example.com" />
                        </Form.Item>
                      </div>

                      {/* Subject + Budget row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                        <Form.Item
                          name="subject"
                          label={
                            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                              Subject
                            </span>
                          }
                          rules={[
                            {
                              required: true,
                              message: "Please enter a subject",
                            },
                          ]}
                        >
                          <Input placeholder="Project inquiry" />
                        </Form.Item>

                        <Form.Item
                          name="budget"
                          label={
                            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                              Budget range
                            </span>
                          }
                        >
                          <Select placeholder="Select a range">
                            <Option value="<5k">Under $5,000</Option>
                            <Option value="5k-15k">$5,000 – $15,000</Option>
                            <Option value="15k-50k">$15,000 – $50,000</Option>
                            <Option value="50k+">$50,000+</Option>
                            <Option value="open">Let's discuss</Option>
                          </Select>
                        </Form.Item>
                      </div>

                      {/* Message */}
                      <Form.Item
                        name="message"
                        label={
                          <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                            Message
                          </span>
                        }
                        rules={[
                          { required: true, message: "Please enter a message" },
                        ]}
                      >
                        <TextArea
                          placeholder="Tell me about your project, idea, or just say hi..."
                          autoSize={{ minRows: 4, maxRows: 7 }}
                          style={{ resize: "none" }}
                        />
                      </Form.Item>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2">
                        <p className="text-slate-600 text-xs">
                          Usually replies within 24h
                        </p>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          disabled={submitting}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all text-sm"
                        >
                          {submitting ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send message
                            </>
                          )}
                        </motion.button>
                      </div>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ContactForm;

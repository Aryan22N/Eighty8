"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Briefcase,
  Building,
  Mail,
  Phone,
  Globe,
  MapPin,
  Palette,
  Type,
  Save,
  X,
  AlertCircle,
  Eye,
  QrCode,
  Link,
  Upload,
  FileText,
} from "lucide-react";

/* ---------------- Button Component ---------------- */
const Button = ({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
  icon: Icon,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-300 border border-slate-300",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={16} className="mr-2" />}
      {children}
    </button>
  );
};

/* ---------------- Input Components ---------------- */
const InputField = ({
  label,
  icon: Icon,
  error,
  children,
  required = false,
  className = "",
}) => (
  <div className={className}>
    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-1.5">
      {Icon && <Icon size={16} className="text-blue-600" />} {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-xs font-medium text-red-600 mt-1.5 flex items-center gap-1">
        <AlertCircle size={12} /> {error}
      </p>
    )}
  </div>
);

const TextInput = ({
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  ...props
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={`w-full p-3 border rounded-lg bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 ${
      error ? "border-red-500 bg-red-50" : "border-slate-300"
    }`}
    placeholder={placeholder}
    {...props}
  />
);

const TextArea = ({
  value,
  onChange,
  placeholder,
  error,
  rows = 3,
  ...props
}) => (
  <textarea
    value={value}
    onChange={onChange}
    rows={rows}
    className={`w-full p-3 border rounded-lg bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 ${
      error ? "border-red-500 bg-red-50" : "border-slate-300"
    }`}
    placeholder={placeholder}
    {...props}
  />
);

const Checkbox = ({ checked, onChange, label, ...props }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
      {...props}
    />
    <span className="text-sm text-slate-700">{label}</span>
  </label>
);

/* ---------------- Card Preview Component ---------------- */
const CardPreview = ({ data }) => {
  const {
    name = "Your Name",
    title = "Your Title",
    company = "Company Name",
    email = "email@example.com",
    phone = "+1 (555) 123-4567",
    website = "www.example.com",
    primaryColor = "#2563eb",
    logo,
    qrCode = false,
    linkedin = "",
    twitter = "",
  } = data;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="p-6 rounded-xl shadow-lg bg-white border-l-4"
        style={{ borderColor: primaryColor }}
      >
        {/* Header with Logo */}
        <div className="flex items-start gap-4 mb-4">
          {logo ? (
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white p-2 flex items-center justify-center border border-slate-200">
              <img src={logo} alt="Logo" className="max-w-full max-h-full" />
            </div>
          ) : (
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <Building size={24} />
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-slate-900">{company}</h2>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">{name}</h1>
          <p className="text-lg font-medium text-slate-700">{title}</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          {email && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Mail size={14} />
              <span>{email}</span>
            </div>
          )}

          {phone && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Phone size={14} />
              <span>{phone}</span>
            </div>
          )}

          {website && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Globe size={14} />
              <span>{website}</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        {(linkedin || twitter) && (
          <div className="flex gap-3 mt-4 pt-4 border-t border-slate-200">
            {linkedin && (
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <Link size={12} />
                <span>LinkedIn</span>
              </div>
            )}
            {twitter && (
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <Link size={12} />
                <span>Twitter</span>
              </div>
            )}
          </div>
        )}

        {/* QR Code */}
        {qrCode && (
          <div className="absolute bottom-4 right-4">
            <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">
              <QrCode size={20} className="text-slate-500" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- Main Page Component ---------------- */
export default function SimpleVisitingCardForm() {
  const router = useRouter();

  // Initial form state - Only essential fields
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    title: "",

    // Company Information
    company: "",

    // Contact Information
    email: "",
    phone: "",
    website: "",

    // Design Preferences
    primaryColor: "#2563eb",

    // Social Media (optional)
    linkedin: "",
    twitter: "",

    // Logo
    logo: "",

    // Features
    qrCode: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  /* ---------------- Handlers ---------------- */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          logo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Visiting card data saved:", formData);

      // Success message
      alert("Visiting card information saved successfully!");

      // Optionally redirect or show success state
      // router.push("/success");
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ form: "Failed to save. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    if (confirm("Reset all fields?")) {
      setFormData({
        name: "",
        title: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        primaryColor: "#2563eb",
        linkedin: "",
        twitter: "",
        logo: "",
        qrCode: false,
      });
      setErrors({});
    }
  };

  const colorOptions = [
    { value: "#2563eb", label: "Blue" },
    { value: "#dc2626", label: "Red" },
    { value: "#059669", label: "Green" },
    { value: "#7c3aed", label: "Purple" },
    { value: "#ea580c", label: "Orange" },
    { value: "#0f172a", label: "Black" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Create Visiting Card
          </h1>
          <p className="text-slate-600">
            Fill in the essential details for your professional visiting card
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <InputField
                    label="Full Name"
                    icon={User}
                    error={errors.name}
                    required
                  >
                    <TextInput
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </InputField>

                  <InputField
                    label="Job Title"
                    icon={Briefcase}
                    error={errors.title}
                    required
                  >
                    <TextInput
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Senior Developer"
                    />
                  </InputField>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Company Information
                </h2>
                <div className="space-y-4">
                  <InputField
                    label="Company Name"
                    icon={Building}
                    error={errors.company}
                    required
                  >
                    <TextInput
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Tech Solutions Inc."
                    />
                  </InputField>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <InputField
                    label="Email Address"
                    icon={Mail}
                    error={errors.email}
                    required
                  >
                    <TextInput
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                    />
                  </InputField>

                  <InputField
                    label="Phone Number"
                    icon={Phone}
                    error={errors.phone}
                    required
                  >
                    <TextInput
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </InputField>

                  <InputField label="Website" icon={Globe}>
                    <TextInput
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="www.company.com"
                    />
                  </InputField>
                </div>
              </div>

              {/* Design Options */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Design Options
                </h2>
                <div className="space-y-6">
                  {/* Color Selection */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">
                      Accent Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={color.value}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              primaryColor: color.value,
                            }))
                          }
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            formData.primaryColor === color.value
                              ? "border-blue-500 scale-110"
                              : "border-slate-300"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.label}
                        />
                      ))}
                      <div className="relative">
                        <input
                          type="color"
                          value={formData.primaryColor}
                          onChange={handleInputChange}
                          name="primaryColor"
                          className="w-8 h-8 rounded-full cursor-pointer opacity-0 absolute"
                        />
                        <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center">
                          <Palette size={14} className="text-slate-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Logo Upload */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">
                      Company Logo (Optional)
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 px-4 py-2 text-white bg-blue-400 hover:bg-bluue-600 rounded-lg cursor-pointer transition-colors w-fit">
                        <Upload size={16} />
                        Upload Logo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                      </label>
                      {formData.logo && (
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 border-2 border-dashed border-slate-300 rounded-lg overflow-hidden">
                            <img
                              src={formData.logo}
                              alt="Logo"
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, logo: "" }))
                            }
                            className="text-sm text-red-600 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* QR Code Option */}
                  <Checkbox
                    name="qrCode"
                    checked={formData.qrCode}
                    onChange={handleInputChange}
                    label="Include QR Code on card"
                  />
                </div>
              </div>

              {/* Social Media (Optional) */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Social Media (Optional)
                </h2>
                <div className="space-y-4">
                  <InputField label="LinkedIn Profile" icon={Link}>
                    <TextInput
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="linkedin.com/in/username"
                    />
                  </InputField>

                  <InputField label="Twitter Handle" icon={Link}>
                    <TextInput
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      placeholder="@username"
                    />
                  </InputField>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleReset}
                  className="flex-1"
                >
                  Reset Form
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setShowPreview(!showPreview)}
                  icon={Eye}
                  className="flex-1"
                >
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </Button>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  icon={Save}
                  className="flex-1"
                >
                  {isSubmitting ? "Saving..." : "Save Visiting Card"}
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Card Preview
                </h2>
                <div className="text-sm text-slate-600">
                  Live updates as you type
                </div>
              </div>

              <div className="flex flex-col items-center justify-center min-h-[500px]">
                <CardPreview data={formData} />

                <div className="mt-8 text-center text-sm text-slate-600">
                  <p className="mb-2">
                    This is how your visiting card will look
                  </p>
                  <p className="text-xs">
                    Fill in all fields to see complete preview
                  </p>
                </div>
              </div>

              {showPreview && (
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h3 className="font-medium text-slate-900 mb-2">
                    Card Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Name:</span>
                      <span className="font-medium">
                        {formData.name || "Not set"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Title:</span>
                      <span className="font-medium">
                        {formData.title || "Not set"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Company:</span>
                      <span className="font-medium">
                        {formData.company || "Not set"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Email:</span>
                      <span className="font-medium">
                        {formData.email || "Not set"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Phone:</span>
                      <span className="font-medium">
                        {formData.phone || "Not set"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="mt-6 bg-blue-50 rounded-xl border border-blue-200 p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                <FileText className="inline mr-2" size={18} />
                Quick Tips
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                  <span>All fields marked with * are required</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                  <span>Use a professional email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                  <span>Keep phone number in international format</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                  <span>Upload a high-quality logo for best results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Error Message */}
        {errors.form && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle size={16} />
              <span className="font-medium">{errors.form}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

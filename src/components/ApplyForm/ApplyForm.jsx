// ApplyForm.jsx
import { useState, useEffect } from 'react';
import './ApplyForm.css';

const ApplyForm = ({ internship, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        major: '',
        graduationYear: '',
        resume: null,
        coverLetter: null,
        portfolioUrl: '',
        questions: `I'm applying for the ${internship.title} position because...`
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Pre-fill relevant fields based on internship type
    useEffect(() => {
        let defaultQuestions = `I'm excited to apply for the ${internship.title} position at MAC Construction because...\n\n`;

        if (internship.skills.includes('AutoCAD') || internship.skills.includes('Revit')) {
            defaultQuestions += "Relevant software experience: ";
        }
        if (internship.location.includes('Remote')) {
            defaultQuestions += "Available for remote work: Yes/No\n";
        }

        setFormData(prev => ({
            ...prev,
            questions: defaultQuestions
        }));
    }, [internship]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Required';
        if (!formData.email.trim()) {
            newErrors.email = 'Required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email';
        }
        if (!formData.resume) newErrors.resume = 'Required';
        if (!formData.university.trim()) newErrors.university = 'Required';
        if (!formData.major.trim()) newErrors.major = 'Required';
        if (!formData.questions.includes(internship.title)) {
            newErrors.questions = `Please mention ${internship.title}`;
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            // In production: send data to your backend
            console.log('Application submitted:', {
                ...formData,
                position: internship.title,
                department: internship.department
            });
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="apply-form-container">
                <div className="form-success">
                    <div className="success-animation">
                        <svg className="checkmark" viewBox="0 0 52 52">
                            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                    <h3>Application Submitted!</h3>
                    <p>Thank you for applying for the <strong>{internship.title}</strong> position.</p>
                    <p>We'll review your materials and contact you within 2 weeks.</p>
                    <button onClick={onClose} className="close-btn">
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="apply-form-container">
            <div className="form-header">
                <h3>Apply for: {internship.title}</h3>
                <p className="internship-meta">
                    <span>{internship.duration}</span> • <span>{internship.location}</span>
                </p>
                <button onClick={onClose} className="close-btn">
                    &times;
                </button>
            </div>

            <form onSubmit={handleSubmit} className="internship-form">
                <div className="form-grid">
                    {/* Personal Info */}
                    <div className="form-group">
                        <label>Full Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Education */}
                    <div className="form-group">
                        <label>University*</label>
                        <input
                            type="text"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            className={errors.university ? 'error' : ''}
                        />
                        {errors.university && <span className="error-message">{errors.university}</span>}
                    </div>

                    <div className="form-group">
                        <label>Major*</label>
                        <input
                            type="text"
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            className={errors.major ? 'error' : ''}
                        />
                        {errors.major && <span className="error-message">{errors.major}</span>}
                    </div>

                    <div className="form-group">
                        <label>Graduation Year</label>
                        <select
                            name="graduationYear"
                            value={formData.graduationYear}
                            onChange={handleChange}
                        >
                            <option value="">Select Year</option>
                            {Array.from({ length: 6 }, (_, i) => new Date().getFullYear() + i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    {/* Documents */}
                    <div className="form-group full-width">
                        <label>Resume* (PDF only)</label>
                        <div className={`file-upload ${errors.resume ? 'error' : ''}`}>
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf"
                                onChange={handleChange}
                            />
                            <span>{formData.resume ? formData.resume.name : 'Choose file'}</span>
                            <button type="button">Browse</button>
                        </div>
                        {errors.resume && <span className="error-message">{errors.resume}</span>}
                    </div>

                    <div className="form-group full-width">
                        <label>Cover Letter (PDF only)</label>
                        <div className="file-upload">
                            <input
                                type="file"
                                name="coverLetter"
                                accept=".pdf"
                                onChange={handleChange}
                            />
                            <span>{formData.coverLetter ? formData.coverLetter.name : 'Choose file'}</span>
                            <button type="button">Browse</button>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label>Portfolio/Website (if applicable)</label>
                        <input
                            type="url"
                            name="portfolioUrl"
                            value={formData.portfolioUrl}
                            onChange={handleChange}
                            placeholder="https://"
                        />
                        {internship.skills.some(skill => ['AutoCAD', 'Revit', 'Lumion'].includes(skill)) && (
                            <p className="hint">Tip: Include links to relevant design projects</p>
                        )}
                    </div>

                    {/* Role-Specific Questions */}
                    <div className="form-group full-width">
                        <label>
                            Why are you interested in this {internship.department.toLowerCase()} internship?*
                        </label>
                        <textarea
                            name="questions"
                            value={formData.questions}
                            onChange={handleChange}
                            rows={6}
                            className={errors.questions ? 'error' : ''}
                        />
                        {errors.questions && <span className="error-message">{errors.questions}</span>}
                        {internship.department === 'Architecture' && (
                            <p className="hint">Mention any relevant design software experience</p>
                        )}
                        {internship.department === 'Engineering' && (
                            <p className="hint">Highlight any technical coursework or projects</p>
                        )}
                    </div>
                </div>

                <div className="form-footer">
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Submitting...
                            </>
                        ) : (
                            `Submit Application for ${internship.title}`
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;
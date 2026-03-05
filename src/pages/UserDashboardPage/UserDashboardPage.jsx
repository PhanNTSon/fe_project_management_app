import { useState, useMemo } from "react"
import CusButton from "../../components/CusButton/CusButton"
import "./UserDashboardPage.css"
import "./ProjectTable.css"
import "./DashboardHeader.css"
import "./AddProjectPopup.css"
import "./DeleteConfirmPopup.css"

export default function UserDashboardPage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    return (
        <div id="dashboard-page">

            {/* ===== BACKGROUND LAYER ===== */}
            <div className="layer background-layer"></div>

            {/* ===== HEADER LAYER ===== */}
            <div className="layer header-layer">
                <DashboardHeader />
            </div>

            {/* ===== CONTENT LAYER ===== */}
            <div className="layer content-layer">
                <div className="content-wrapper">
                    <ProjectTable
                        onAdd={() => setIsPopupOpen(true)}
                    />
                </div>
            </div>

            {/* ===== MODAL LAYER ===== */}
            <div className={`layer modal-layer ${isPopupOpen ? "open" : ""}`}>
                <AddProjectPopup
                    onClose={() => setIsPopupOpen(false)}
                />
            </div>

        </div>
    )
}

function DashboardHeader() {
    return (
        <div id="dashboard-header">
            <div className="profile-circle"></div>
        </div>
    )
}

function ProjectTable({ onAdd }) {
    const dummyData = [
        { id: 1, name: "Project A", description: "Mô tả A" },
        { id: 2, name: "Project B", description: "Mô tả B" },
        { id: 3, name: "Project C", description: "Mô tả C" }
    ]

    const [selectedProjects, setSelectedProjects] = useState([])
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    const handleSelect = (project) => {
        setSelectedProjects(prev => {
            const exists = prev.find(p => p.id === project.id)
            if (exists) {
                return prev.filter(p => p.id !== project.id)
            }
            return [...prev, project]
        })
    }

    return (
        <div id="project-section">

            <CusButton
                color="gradient-green-button"
                label="Add"
                onClick={onAdd}
            />
            <CusButton
                color="red-button"
                label="Delete"
                onClick={() => setIsDeleteOpen(true)}
                disabled={selectedProjects.length === 0}
            />

            <table className="project-table">
                <thead>
                    <tr>
                        <th style={{ width: "80px" }}></th>
                        <th>Tên Project</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map(project => (
                        <tr key={project.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedProjects.some(p => p.id === project.id)}
                                    onChange={() => handleSelect(project)}
                                />
                            </td>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isDeleteOpen && (
                <DeleteConfirmPopup
                    projects={selectedProjects}
                    onClose={() => setIsDeleteOpen(false)}
                    onConfirm={() => {
                        console.log("Delete:", selectedProjects)
                        setIsDeleteOpen(false)
                        setSelectedProjects([])
                    }}
                />
            )}

        </div>
    )
}

function DeleteConfirmPopup({ projects, onClose, onConfirm }) {
    const [input, setInput] = useState("")

    const requiredText = useMemo(() => {
        return projects.map(p => p.name).join(", ")
    }, [projects])

    const isMatch = input.trim() === requiredText

    return (
        <div className="delete-overlay">
            <div className="delete-popup">

                <h3>Confirm Deletion</h3>

                <p>
                    To confirm, type:
                </p>

                <div className="required-text">
                    {requiredText}
                </div>

                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <div className="actions">
                    <CusButton
                        color="red-button"
                        label="Delete Permanently"
                        disabled={!isMatch}
                        onClick={onConfirm}
                    />

                    <CusButton
                        color="grey-button"
                        label="Cancel"
                        onClick={onClose}
                    />
                </div>

            </div>
        </div>
    )
}

function AddProjectPopup({ onClose }) {

    const [projectName, setProjectName] = useState("")
    const [description, setDescription] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [memberEmails, setMemberEmails] = useState([])
    const [error, setError] = useState("")

    // Regex kiểm tra email cơ bản
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleAddEmail = () => {
        const trimmed = emailInput.trim().toLowerCase()

        if (!trimmed) return

        if (!isValidEmail(trimmed)) {
            setError("Email không hợp lệ")
            return
        }

        if (memberEmails.includes(trimmed)) {
            setError("Email đã tồn tại")
            return
        }

        setMemberEmails(prev => [...prev, trimmed])
        setEmailInput("")
        setError("")
    }

    const handleRemoveEmail = (emailToRemove) => {
        setMemberEmails(prev =>
            prev.filter(email => email !== emailToRemove)
        )
    }


    return (
        <div className="popup-container">

            <div className="popup-card">

                <div className="form-group">
                    <label>Project Name</label>
                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Members</label>
                    <div className="member-list">
                        {memberEmails.map(email => (
                            <span key={email} className="member-chip">
                                {email}
                                <span
                                    className="remove"
                                    onClick={() => handleRemoveEmail(email)}
                                >
                                    ×
                                </span>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="form-group member-input">
                    <label>Member’s Email</label>
                    <div className="input-with-add">
                        <input
                            type="text"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleAddEmail()
                                }
                            }}
                        />
                        <button
                            className="add-member-btn"
                            onClick={handleAddEmail}
                        >
                            +
                        </button>

                    </div>
                    {error && <div className="error-text">{error}</div>}
                </div>

                <div className="popup-actions">
                    <CusButton
                        color="gradient-green-button"
                        label="Create"
                        onClick={() => { }}
                    />
                    <CusButton
                        color="cancel-button"
                        label="Cancel"
                        onClick={onClose}
                    />
                </div>

            </div>
        </div>
    )
}
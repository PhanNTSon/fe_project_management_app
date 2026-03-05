import { useState, useMemo } from "react"
import CusButton from "../../components/CusButton/CusButton"
import "./UserDashboardPage.css"
import "./ProjectTable.css"
import "./DashboardHeader.css"
import "./AddProjectPopup.css"
import "./DeleteConfirmPopup.css"
import { useNavigate } from "react-router-dom"

export default function UserDashboardPage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    const [projects, setProjects] = useState([
        { id: 1, name: "E-Commerce Platform", description: "Online shopping system", status: "Active" },
        { id: 2, name: "Healthcare System", description: "Patient & billing system", status: "Active" },
        { id: 3, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
        { id: 4, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
        { id: 5, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
        { id: 6, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
        { id: 7, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
        { id: 8, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
        { id: 9, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
        { id: 10, name: "Student Information System", description: "Manage students lifecycle", status: "Archived" },
    ])

    const [selectedProjects, setSelectedProjects] = useState([])

    const handleSelect = (project) => {
        setSelectedProjects(prev => {
            const exists = prev.find(p => p.id === project.id)
            if (exists) {
                return prev.filter(p => p.id !== project.id)
            }
            return [...prev, project]
        })
    }

    const handleDelete = () => {
        setProjects(prev =>
            prev.filter(p => !selectedProjects.some(sp => sp.id === p.id))
        )
        setSelectedProjects([])
        setIsDeleteOpen(false)
    }

    return (
        <div id="dashboard-page">

            {/* BACKGROUND */}
            <div className="layer background-layer"></div>

            {/* HEADER */}
            <div className="layer header-layer">
                <DashboardHeader total={projects.length} />
            </div>

            {/* CONTENT */}
            <div className="layer content-layer">

                <div className="content-wrapper">

                    <div className="top-bar">
                        <span className="total-text">
                            Total Projects: <strong>{projects.length}</strong>
                        </span>

                        <div className="actions">
                            <CusButton
                                color="red-button"
                                label="Delete"
                                disabled={selectedProjects.length === 0}
                                onClick={() => setIsDeleteOpen(true)}
                            />
                            <CusButton
                                color="gradient-blue-button"
                                label={<><span className="material-symbols-outlined">add</span> Add Project</>}
                                onClick={() => setIsPopupOpen(true)}
                            />
                        </div>
                    </div>

                    <div className="card-grid">
                        {projects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                selected={selectedProjects.some(p => p.id === project.id)}
                                onSelect={() => handleSelect(project)}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* ===== MODAL LAYER ===== */}
            <div className={`layer modal-layer ${isPopupOpen ? "open" : ""}`}>
                <AddProjectPopup
                    onClose={() => setIsPopupOpen(false)}
                />
            </div>

            {/* DELETE POPUP */}
            {isDeleteOpen && (
                <DeleteConfirmPopup
                    projects={selectedProjects}
                    onClose={() => setIsDeleteOpen(false)}
                    onConfirm={handleDelete}
                />
            )}

        </div>
    )
}
function DashboardHeader({ total }) {
    return (
        <div id="dashboard-header">
            <div className="title-group">
                <h1>SRS Management System</h1>
                <p>Manage your software requirement projects</p>
            </div>

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
                label={<><span className="material-symbols-outlined">add</span> add</>}
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
                        color="dashed-text-button"
                        label="Cancel"
                        onClick={onClose}
                    />
                </div>

            </div>
        </div>
    )
}

function ProjectCard({ project, selected, onSelect }) {

    const navigate = useNavigate();

    return (
        <div className={`project-card ${selected ? "selected" : ""}`}>

            <div className="card-header">
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={onSelect}
                />
                <h3>{project.name}</h3>
            </div>

            <p className="description">{project.description}</p>

            <div className="card-footer">
                <span className={`status ${project.status.toLowerCase()}`}>
                    {project.status}
                </span>

                <CusButton
                    color="dashed-text-button"
                    label="View Details"
                    onClick={() => navigate(`/projects/${project.id}`)}
                />
            </div>
        </div>
    )
}
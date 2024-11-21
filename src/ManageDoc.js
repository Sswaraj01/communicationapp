import React, { useState, useEffect } from "react";

const ManageDoc = () => {
  const [documents, setDocuments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newDocName, setNewDocName] = useState("");
  const [newDocFile, setNewDocFile] = useState("");
  const [editIndex, setEditIndex] = useState(null); // To track which document is being edited

  useEffect(() => {
    // Fetch documents from localStorage
    const storedDocs = JSON.parse(localStorage.getItem("documents")) || [];
    setDocuments(storedDocs);
  }, []);

  const saveDocumentsToLocalStorage = (docs) => {
    localStorage.setItem("documents", JSON.stringify(docs));
  };

  const handleAddDocument = () => {
    if (!newDocName || !newDocFile) {
      alert("Please fill in all fields.");
      return;
    }

    const newDocument = {
      name: newDocName,
      path: newDocFile,
    };

    const updatedDocuments = [...documents, newDocument];
    setDocuments(updatedDocuments);
    saveDocumentsToLocalStorage(updatedDocuments);
    setNewDocName("");
    setNewDocFile("");
    setShowModal(false);
  };

  const handleEditDocument = (index) => {
    const docToEdit = documents[index];
    setNewDocName(docToEdit.name);
    setNewDocFile(docToEdit.path);
    setEditIndex(index); // Set the document index being edited
    setShowModal(true); // Open the modal for editing
  };

  const handleSaveEdit = () => {
    if (!newDocName || !newDocFile) {
      alert("Please fill in all fields.");
      return;
    }

    // Update the document with the new name and path
    const updatedDocuments = documents.map((doc, index) =>
      index === editIndex
        ? { ...doc, name: newDocName, path: newDocFile }
        : doc
    );

    setDocuments(updatedDocuments);
    saveDocumentsToLocalStorage(updatedDocuments);
    setNewDocName("");
    setNewDocFile("");
    setEditIndex(null); // Reset edit index
    setShowModal(false); // Close the modal
  };

  const handleDeleteDocument = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
    saveDocumentsToLocalStorage(updatedDocuments);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Documents</h2>
      <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Path</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>{doc.name}</td>
              <td>{doc.path}</td>
              <td>
                <button onClick={() => handleEditDocument(index)}>Edit</button>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleDeleteDocument(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setShowModal(true)}>Add Document</button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          }}
        >
          <h3>{editIndex !== null ? "Edit Document" : "Add Document"}</h3>
          <div style={{ marginBottom: "10px" }}>
            <label>
              File Name:{" "}
              <input
                type="text"
                value={newDocName}
                onChange={(e) => setNewDocName(e.target.value)}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              File Path:{" "}
              <input
                type="file"
                onChange={(e) =>
                  setNewDocFile(e.target.value.replace("C:\\fakepath\\", ""))
                }
              />
            </label>
          </div>
          <button onClick={editIndex !== null ? handleSaveEdit : handleAddDocument}>
            {editIndex !== null ? "Save Changes" : "Add"}
          </button>
          <button
            onClick={() => setShowModal(false)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageDoc;

// src/components/UpdateCourse.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/UpdateCourse.css"; // optional custom styles

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({});
  const [image, setImage] = useState(null);
  const [updateCourse, setUpdateCourse] = useState({
    id: null,
    title: "",
    subtitle: "",
    short_description: "",
    created_by: "",
    language: "",
    rating: "",
    students: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:8082/api/get-course/${id}`);
        setCourse(res.data);
        setUpdateCourse(res.data);

        if (res.data.imageName) {
          const resImage = await axios.get(`http://localhost:8082/api/course/${id}/image`, {
            responseType: "blob",
          });
          const imageFile = await convertUrlToFile(resImage.data, res.data.imageName);
          setImage(imageFile);
        }
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };

    fetchCourse();
  }, [id]);

  const convertUrlToFile = async (blobData, fileName) => {
    return new File([blobData], fileName, { type: blobData.type });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateCourse({ ...updateCourse, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("course", new Blob([JSON.stringify(updateCourse)], { type: "application/json" }));
      if (image) {
        formData.append("imageFile", image);
      }

      await axios.put(`http://localhost:8082/api/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Course updated successfully!");
      navigate("/home");
    } catch (err) {
      console.error("❌ Error updating course:", err);
      alert("Failed to update course. Please try again.");
    }
  };

  return (
    <div className="update-course-page py-5">
      <div className="container update-course-container">
        <div className="card update-course-card shadow-lg">
          <div className="card-body">
            <h2 className="text-center text-success update-course-title mb-4">✏️ Update Course</h2>
            <form onSubmit={handleSubmit} className="update-course-form">

              <div className="mb-3 update-course-input">
                <label className="form-label">Course Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={updateCourse.title}
                  onChange={handleChange}
                  placeholder={course.title}
                  required
                />
              </div>

              <div className="mb-3 update-course-input">
                <label className="form-label">Subtitle</label>
                <input
                  type="text"
                  className="form-control"
                  name="subtitle"
                  value={updateCourse.subtitle}
                  onChange={handleChange}
                  placeholder={course.subtitle}
                  required
                />
              </div>

              <div className="mb-3 update-course-input">
                <label className="form-label">Short Description</label>
                <textarea
                  className="form-control"
                  name="short_description"
                  value={updateCourse.short_description}
                  onChange={handleChange}
                  rows="3"
                  placeholder={course.short_description}
                  required
                ></textarea>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3 update-course-input">
                  <label className="form-label">Created By</label>
                  <input
                    type="text"
                    className="form-control"
                    name="created_by"
                    value={updateCourse.created_by}
                    onChange={handleChange}
                    placeholder={course.created_by}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3 update-course-input">
                  <label className="form-label">Language</label>
                  <input
                    type="text"
                    className="form-control"
                    name="language"
                    value={updateCourse.language}
                    onChange={handleChange}
                    placeholder={course.language}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3 update-course-input">
                  <label className="form-label">Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    className="form-control"
                    name="rating"
                    value={updateCourse.rating}
                    onChange={handleChange}
                    placeholder={course.rating}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3 update-course-input">
                  <label className="form-label">Enrolled Students</label>
                  <input
                    type="number"
                    className="form-control"
                    name="students"
                    value={updateCourse.students}
                    onChange={handleChange}
                    placeholder={course.students}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 update-course-input">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="start_date"
                    value={updateCourse.start_date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 update-course-input">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="end_date"
                    value={updateCourse.end_date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 update-course-image">
                <label className="form-label">Course Image</label><br />
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                    className="img-fluid mb-2 update-course-image-preview"
                  />
                ) : course.imageName ? (
                  <img
                    src={`http://localhost:8082/api/course/${id}/image`}
                    alt="Existing"
                    className="img-fluid mb-2 update-course-image-preview"
                  />
                ) : (
                  <p className="text-muted">No image available</p>
                )}
                <input
                  className="form-control"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <button type="submit" className="btn btn-success w-100 fw-bold update-course-submit-btn">
                Update Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;

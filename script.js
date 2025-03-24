const courses = {
    MTH111M: {
        title: "MTH111M - Single Variable Calculus",
        pyqs: "Here you can find the previous year questions for the course.",
        assignments: "Here you can find the assignments for the course.",
        amNotes: "Here you can find the AM notes for the course.",
        classNotes: "Here you can find the class notes for the course."
    },
    // Add more courses here
};

function loadCourse(courseId) {
    const course = courses[courseId];
    if (course) {
        const courseContent = `
            <header id="head">
                <h1>${course.title}</h1>
            </header>
            <div class="content">
                <section id="pyqs">
                    <h2>PYQs (Previous Year Questions)</h2>
                    <p>${course.pyqs}</p>
                </section>
                <section id="assignments">
                    <h2>Assignments</h2>
                    <p>${course.assignments}</p>
                </section>
                <section id="am-notes">
                    <h2>AM Notes</h2>
                    <p>${course.amNotes}</p>
                </section>
                <section id="class-notes">
                    <h2>Class Notes</h2>
                    <p>${course.classNotes}</p>
                </section>
            </div>
        `;
        document.getElementById('course-content').innerHTML = courseContent;
    }
}











// const courses = {
//     MTH111M: {
//         title: "MTH111M - Single Variable Calculus",
//         pyqs: "Here you can find the previous year questions for the course.",
//         assignments: "Here you can find the assignments for the course.",
//         amNotes: "Here you can find the AM notes for the course.",
//         classNotes: "Here you can find the class notes for the course."
//     },
//     PHY111: {
//         title: "PHY111 - Physics Laboratory",
//         pyqs: "Here you can find the previous year questions for the course.",
//         assignments: "Here you can find the assignments for the course.",
//         amNotes: "Here you can find the AM notes for the course.",
//         classNotes: "Here you can find the class notes for the course."
//     },
//     // Add more courses here
// };
# Form Validation

<h2>Contact Form Validation</h2>
<p>This project implements a contact form validation feature using HTML, CSS, and JavaScript. It provides users with a form to input their full name, phone number, email, and message, with real-time validation and feedback, ensuring a user-friendly experience.</p>

<h2>Key Features</h2>
<h3>Form Validation</h3>
<p>The form includes four input fields—Full Name, Phone Number, Email, and Message. Each field is validated as the user types, providing immediate feedback.</p>

<h3>Real-Time Error Messages</h3>
<p>If an input does not meet the required criteria (e.g., a name isn't in the correct format or the phone number doesn't contain 11 digits), an error message is displayed below the input field. Valid inputs are confirmed with a checkmark icon.</p>

<h2>Technical Overview</h2>
<h3>HTML Structure</h3>
<p>The HTML file structures the form with labels and input fields. It includes a FontAwesome icon at the top and utilizes span elements to display validation messages.</p>

<h3>CSS Styling</h3>
<h4>Design and Layout</h4>
<p>The form is centered on the page, with a modern design featuring a dark background and a clean, white form container. Input fields have a minimalist style, with a border-bottom line and transparent background.</p>

<h4>Error Messages</h4>
<p>Errors are displayed in red text next to the input fields.</p>

<h3>JavaScript Functionality</h3>
<h4>Validation Functions</h4>
<p>The JavaScript file includes functions for validating each input field. It checks for proper format (e.g., name should include both first and last names, phone number should be digits only) and displays corresponding messages.</p>

<h4>Submit Button</h4>
<p>The submit button triggers a final validation check. If all fields are valid, the form is submitted; otherwise, a general error message is shown.</p>

    function validateForm() {
        //Function implementation
    }

<h2>In Summary</h2>
<p>This contact form validation project enhances user experience by providing real-time feedback and ensuring that all input data is correctly formatted before submission. The combination of dynamic validation, clean styling, and user-friendly messages makes it an effective solution for creating reliable forms.</p>

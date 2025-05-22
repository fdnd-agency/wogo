<div class="container">
        <div class="form-container">            
            <form id="feedbackForm">
                <div class="form-group">
                    <label for="name">Volledige naam*</label>
                    <div class="input-group">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" id="name" name="name" placeholder="Vul je volledige naam in" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="email">E-mail adres*</label>
                    <div class="input-group">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" id="email" name="email" placeholder="Vul je e-mail adres in" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email">Naam ontvanger*</label>
                    <div class="input-group">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" id="email" name="email" placeholder="Vul de naam van de ontvanger in" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email">E-mail adres ontvanger*</label>
                    <div class="input-group">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" id="email" name="email" placeholder="Vul je e-mail adres in" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="feedback">Bericht</label>
                    <textarea id="feedback" name="feedback" placeholder="Vul een bericht in voor de ontvanger"></textarea>
                </div>
                
                <div class="form-buttons">
                    <p class="total-price">Totaal: 50,00</p>
                    <button type="submit" class="submit-btn">Afrekenen</button>
                </div>
            </form>
            
        </div>
    </div>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--text-dark);
    line-height: 1.6;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
}

.form-container {
    width: 100%;
    max-width: 700px;
    border-radius: 2px;
    border: 1px solid #FFD4BD;
    box-shadow: 0 15px 30px var(--shadow);
    overflow: hidden;
    position: relative;
}

form {
    padding: 30px;
    padding-top: 40px;
}

.form-group {
    margin-bottom: 25px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #FFD4BD;
    font-size: 0.95rem;
}

.input-group {
    position: relative;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--primary);
    font-size: 1.1rem;
}

input[type="text"],
input[type="email"],
select,
textarea {
    width: 100%;
    padding: 12px 15px 12px 45px;
    border: 1px solid var(--border);
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    color: var(--text-dark);
    background-color: #FFD4BD;
    transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.15);
}

select {
    cursor: pointer;
    appearance: none;
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
}

textarea {
    height: 120px;
    padding: 15px;
    resize: vertical;
}

/* Rating Stars */
.rating-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}

.rating input {
    display: none;
}

.rating label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rating label i {
    font-size: 1.8rem;
    color: #e1e5f1;
    transition: all 0.2s ease;
}

.rating input:checked ~ label i,
.rating label:hover i,
.rating label:hover ~ label i {
    color: #ffc107;
}

/* Checkbox group */
.checkbox-group {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 10px;
}

.checkbox-item {
    display: flex;
    align-items: center;
    background-color: #f0f3ff;
    padding: 8px 15px;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.checkbox-item:hover {
    background-color: #e6eaff;
}

.checkbox-item input[type="checkbox"] {
    margin-right: 8px;
    accent-color: var(--primary);
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.checkbox-item label {
    margin-bottom: 0;
    cursor: pointer;
    font-weight: 400;
    font-size: 0.9rem;
}

/* Slider */
.slider-container {
    position: relative;
    padding: 10px 0;
}

input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: linear-gradient(to right, var(--primary-light), var(--primary));
    outline: none;
    margin: 15px 0;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.slider-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--text-light);
}

.slider-value {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary);
    color: var(--white);
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s ease;
}

.slider-value:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--primary);
}

/* Buttons */
.form-buttons {
    display: flex;
    gap: 15px;
    margin-top: 35px;
}

.form-buttons .total-price {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #FFD4BD;
}

.reset-btn,
.submit-btn,
.new-feedback-btn {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 20px;
    padding: 12px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.reset-btn {
    background-color: var(--white);
    color: var(--text-dark);
    border: 1px solid var(--border);
}

.reset-btn:hover {
    background-color: #f5f7ff;
}

.submit-btn {
    background: #FFAA81;
    flex-grow: 1;
}

.submit-btn:hover {
    transform: translateY(-3px);
}

.submit-btn:active {
    transform: translateY(0);
}

/* Success message */
.success-message {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    z-index: 10;
}

.success-message.show {
    opacity: 1;
    visibility: visible;
}

.success-message i {
    font-size: 5rem;
    color: var(--success);
    margin-bottom: 20px;
}

.success-message h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--text-dark);
}

.success-message p {
    color: var(--text-light);
    margin-bottom: 30px;
    text-align: center;
}

.new-feedback-btn {
    background: linear-gradient(135deg, var(--accent), var(--accent-dark));
    color: var(--white);
    box-shadow: 0 5px 15px rgba(0, 210, 211, 0.3);
}

.new-feedback-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 210, 211, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
    .form-container {
        border-radius: 15px;
    }
    
    .form-header h1 {
        font-size: 1.8rem;
    }
    
    .form-header, form {
        padding: 20px;
    }
    
    .rating label {
        width: 30px;
        height: 30px;
    }
    
    .rating label i {
        font-size: 1.4rem;
    }
    
    .checkbox-group {
        flex-direction: column;
    }
}
</style>
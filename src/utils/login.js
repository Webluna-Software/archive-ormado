import axios from "axios"
import bcrypt from 'bcryptjs-react'
import { deleteCookie, setCookie } from "./cookie"
import { saveUserData } from "./user"

export const {loginApiLink , loginHeaders} = {
    loginApiLink : "https://ormadoapi.webluna.org/api/admin",
    loginHeaders: ""
}

export const loginAction =(email , password , redirectPath , rememberMe) => {
    axios.get(`${loginApiLink}/user`)
    .then((res) => {
        const data = res.data.data;        
        const thisUser = data.find((u) => u.email == email);

        if (!thisUser) {
            // alert("Either the email or password is incorrect!");
            showModal("Login Error", "Either the email or password is incorrect!");
        } else {
            bcrypt.compare(password, thisUser.password)
            .then((res) => {
                if (res) {
                    if (rememberMe) {
                        saveUserData(thisUser._id);
                    }
                    setCookie('rememberMe', JSON.stringify(rememberMe));
                    sessionStorage.setItem("userID", thisUser._id);
                    window.location.replace("/");
                    // alert("You have logged in successfully !");
                    showModal("Success", "You have logged in successfully!");
                } else {
                    // alert("Either the email or password is incorrect!");
                    showModal("Login Error", "Either the email or password is incorrect!");
                }
            });
        }
    })
    .catch(() => {
        // alert("Api Failure !!!");
        showModal("Error", "API Failure!");
    });
}

export const logOutUser = (redirectPath) => {
    showModalWithConfirmation(
        "Logout Confirmation",
        "Are you sure you want to log out?",
        function() {
            deleteCookie('user');
            sessionStorage.removeItem('userID');
            window.location.replace(redirectPath);
        }
    );
}

function showModalWithConfirmation(title, message, onConfirm) {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal fade show';
    modalContainer.style.display = 'block';
    modalContainer.tabIndex = -1;
    modalContainer.role = 'dialog';

    modalContainer.innerHTML = `
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirm-btn">Confirm</button>
                </div>
            </div>
        </div>
    `;
 
    document.body.appendChild(modalContainer);

    modalContainer.querySelector('.btn-close').onclick = function() {
        document.body.removeChild(modalContainer);
    };
    // modalContainer.querySelector('.btn-secondary').onclick = function() {
    //     document.body.removeChild(modalContainer);
    // };
    modalContainer.querySelector('#confirm-btn').onclick = function() {
        onConfirm();
        document.body.removeChild(modalContainer);
    };
}

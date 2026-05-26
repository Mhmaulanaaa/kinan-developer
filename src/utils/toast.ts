import Toast from "react-native-toast-message";

/**
 * =========================
 * SUCCESS TOAST
 * =========================
 */

export const successToast = (msg: string) => {
    Toast.show({
        type: "success",
        text1: "Berhasil",
        text2: msg,
        position: "top",
        visibilityTime: 2500,
    });
};

/**
 * =========================
 * ERROR TOAST
 * =========================
 */

export const errorToast = (msg: string) => {
    Toast.show({
        type: "error",
        text1: "Oops",
        text2: msg,
        position: "top",
        visibilityTime: 3000,
    });
};

/**
 * =========================
 * LOGIN TOAST
 * =========================
 */

export const loginSuccessToast = () => {
    Toast.show({
        type: "success",
        text1: "Login Berhasil",
        text2: "Selamat datang kembali",
        position: "top",
    });
};

export const loginErrorToast = () => {
    Toast.show({
        type: "error",
        text1: "Login Gagal",
        text2: "Email atau password salah",
        position: "top",
    });
};

/**
 * =========================
 * REGISTER TOAST
 * =========================
 */

export const registerSuccessToast = () => {
    Toast.show({
        type: "success",
        text1: "Registrasi Berhasil",
        text2: "Akun berhasil dibuat",
        position: "top",
    });
};

export const registerErrorToast = () => {
    Toast.show({
        type: "error",
        text1: "Registrasi Gagal",
        text2: "Silakan coba lagi",
        position: "top",
    });
};

/**
 * =========================
 * LOGOUT TOAST
 * =========================
 */

export const logoutToast = () => {
    Toast.show({
        type: "info",
        text1: "Logout Berhasil",
        text2: "Sampai jumpa kembali",
        position: "top",
    });
};

/**
 * =========================
 * DELETE TOAST
 * =========================
 */

export const deleteToast = () => {
    Toast.show({
        type: "success",
        text1: "Data Dihapus ",
        text2: "Data berhasil dihapus",
        position: "top",
    });
};

/**
 * =========================
 * UPDATE TOAST
 * =========================
 */

export const updateToast = () => {
    Toast.show({
        type: "success",
        text1: "Update Berhasil",
        text2: "Data berhasil diperbarui",
        position: "top",
    });
};

/**
 * =========================
 * SAVE TOAST
 * =========================
 */

export const saveToast = () => {
    Toast.show({
        type: "success",
        text1: "Data Disimpan",
        text2: "Data berhasil disimpan",
        position: "top",
    });
};

/**
 * =========================
 * NETWORK ERROR TOAST
 * =========================
 */

export const networkToast = () => {
    Toast.show({
        type: "error",
        text1: "Koneksi Bermasalah 🌐",
        text2: "Periksa internet Anda",
        position: "top",
    });
};

/**
 * =========================
 * WARNING TOAST
 * =========================
 */

export const warningToast = (msg: string) => {
    Toast.show({
        type: "info",
        text1: "Peringatan !!!",
        text2: msg,
        position: "top",
    });
};

/**
 * =========================
 * LOADING TOAST
 * =========================
 */

export const loadingToast = () => {
    Toast.show({
        type: "info",
        text1: "Loading...",
        text2: "Mohon tunggu sebentar",
        position: "top",
        autoHide: false,
    });
};

/**
 * =========================
 * HIDE TOAST
 * =========================
 */

export const hideToast = () => {
    Toast.hide();
};
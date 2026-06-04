import React from "react";
import { View, Text } from "react-native";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";

// Custom Toast
const CustomToast = ({ bgColor, icon, title, message }: any) => {
  return (
    <View
      style={{
        width: "92%",
        backgroundColor: bgColor,
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderRadius: 22,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      <View
        style={{
          width: 46,
          height: 46,
          borderRadius: 23,
          backgroundColor: "rgba(255,255,255,0.2)",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 14,
        }}
      >
        {icon}
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            color: "#f1f5f9",
            fontSize: 13,
            marginTop: 2,
          }}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

// Custom Login Success Toast
export const loginSuccessToast = () => {
  Toast.show({
    position: "top",
    visibilityTime: 2500,
    autoHide: true,

    props: {
      render: () => (
        <CustomToast
          bgColor="#16a34a"
          title="Login Berhasil"
          message="Selamat datang kembali"
          icon={<Ionicons name="checkmark-circle" size={26} color="white" />}
        />
      ),
    },

    type: "custom",
  });
};

// Custom Logout Toast
export const logoutToast = () => {
  Toast.show({
    type: "custom",
    position: "top",

    props: {
      render: () => (
        <CustomToast
          bgColor="#16a34a"
          title="Logout Berhasil"
          message="Sampai jumpa kembali"
          icon={<Ionicons name="log-out-outline" size={24} color="white" />}
        />
      ),
    },
  });
};

// Custom Register Success Toast
export const registerSuccessToast = () => {
  Toast.show({
    type: "custom",
    position: "top",

    props: {
      render: () => (
        <CustomToast
          bgColor="#16a34a"
          title="Registrasi Berhasil"
          message="Akun berhasil dibuat"
          icon={<Ionicons name="person-add" size={24} color="white" />}
        />
      ),
    },
  });
};

// Custom Save Toast
export const saveToast = () => {
  Toast.show({
    type: "custom",

    props: {
      render: () => (
        <CustomToast
          bgColor="#0f766e"
          title="Data Disimpan"
          message="Data berhasil disimpan"
          icon={<Ionicons name="save" size={24} color="white" />}
        />
      ),
    },
  });
};

// Custom Update Data Toast
export const updateToast = () => {
  Toast.show({
    type: "custom",

    props: {
      render: () => (
        <CustomToast
          bgColor="#ea580c"
          title="Update Berhasil"
          message="Data berhasil diperbarui"
          icon={<Ionicons name="create" size={24} color="white" />}
        />
      ),
    },
  });
};

// Custom Delete Data Toast
export const deleteToast = () => {
  Toast.show({
    type: "custom",

    props: {
      render: () => (
        <CustomToast
          bgColor="#dc2626"
          title="Data Dihapus"
          message="Data berhasil dihapus"
          icon={<Ionicons name="trash" size={24} color="white" />}
        />
      ),
    },
  });
};

// Custom Error Toast
export const errorToast = (msg: string) => {
  Toast.show({
    type: "custom",

    props: {
      render: () => (
        <CustomToast
          bgColor="#b91c1c"
          title="Terjadi Kesalahan"
          message={msg}
          icon={<Ionicons name="close-circle" size={24} color="white" />}
        />
      ),
    },
  });
};

// Custom Warning Toast
export const warningToast = (msg: string) => {
  Toast.show({
    type: "custom",

    props: {
      render: () => (
        <CustomToast
          bgColor="#ca8a04"
          title="Peringatan"
          message={msg}
          icon={<Ionicons name="warning" size={24} color="white" />}
        />
      ),
    },
  });
};

// Custom Network Error Toast
export const networkToast = () => {
  Toast.show({
    type: "custom",

    props: {
      render: () => (
        <CustomToast
          bgColor="#7c3aed"
          title="Koneksi Bermasalah"
          message="Periksa internet Anda 🌐"
          icon={<Ionicons name="wifi" size={24} color="white" />}
        />
      ),
    },
  });
};

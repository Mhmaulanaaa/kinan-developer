import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import SplashImage from "../../assets/logo/KINAN.png";

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2500);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-green-600 px-6">
      <View className="items-center">
        <Image source={SplashImage} className="w-32 h-32 " />

        <Text className="text-white text-4xl font-bold mt-6">KINAN</Text>

        <Text className="text-green-100 text-center mt-3 text-base">
          Kanal Informasi dan Layanan
        </Text>
      </View>
    </View>
  );
}

import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/sign-in");
  };

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
  );
}

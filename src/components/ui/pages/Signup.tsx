import { useState } from "react";

export default function Signup() {
  const [formDate, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    isPremium: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div>
      
    </div>
  )
}

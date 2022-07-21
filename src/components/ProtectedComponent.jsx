import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../authentication/firebase';

function ProtectedComponent({children}) {
  // Kita gunakan hooksnya di sini
  const navigate = useNavigate();

  // Karena di sini kita hanya mengecek dari user, kita hanya gunakan [user] saja
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    // Di sini kita akan membuat logic, apabila user tidak ada (null), maka akan kita
    // "paksa" ke halaman login
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  // Apabila kondisinya masih dalam tahap loading, kita berikan halaman kosong
  if (isLoading) {
    return;
  } else {
    // Bila tidak isLoading (berarti sudah selesai)
    // Kita kembalikan children yang ingin dirender
    return children;
  }

  // // Apabila semua baik baik saja, kita akan mengembalikan children
  // return isLoading ? "" : children;
};

export default ProtectedComponent
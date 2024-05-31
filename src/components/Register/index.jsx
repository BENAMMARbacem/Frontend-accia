import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen w-full px-5">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div className="w-full p-8">
          <p className="text-xl text-gray-600 text-center">Créer un compte</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nom{" "}
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Prenom{" "}
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mot De Passe
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              required
            />
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              S'inscrire{" "}
            </button>
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <p className="text-xs text-gray-500">
              Vous avez déjà un compte ?
              <a
                href="#"
                className="text-blue-700 hover:underline"
                onClick={() => navigate("/login")}
              >
                connectez-vous{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

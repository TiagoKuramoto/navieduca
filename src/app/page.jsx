'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "Cordenação") {
      router.push("/dashboard");
    } else if (role === "Professor") {
      router.push("/painel");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="p-4 flex justify-center font-bold">
          <h2>FAÇA LOGIN</h2>
        </div>
        <form className="card-body" onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PERFIL</span>
            </label>
            <select
              className="select w-full max-w-xs"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option disabled value="">
                SELECIONE
              </option>
              <option value="Cordenação">Cordenação</option>
              <option value="Professor">Professor</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CPF</span>
            </label>
            <input
              type="text"
              placeholder="DIGITE SEU CPF "
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">SENHA</span>
            </label>
            <input
              type="password"
              placeholder="DIGITE SUA SENHA"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                RECUPERAR SENHA
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

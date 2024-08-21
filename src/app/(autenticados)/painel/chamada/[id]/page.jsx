"use client"

import { useParams } from 'next/navigation';

export default function Chamada() {
    const { id, nome } = useParams();  // 'id' é o nome do parâmetro dinâmico

    return (
        <div className="overflow-x-auto bg-base-100 mx-auto container h-screen">
            <h1>Post ID: {id}</h1>
            <p>Conteúdo do post com ID {nome}.</p>
            <div >
                <table className="table">

                    <thead>
                        <tr>

                            <th>Aluno</th>
                            <th>Sobre o aluno</th>
                            <th>Falta</th>
                            <th>Presente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                            <span className="text-3xl">H</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">Aluno</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Hart Hagerty
                                <br />
                                <input
                                    type="text"
                                    placeholder="Sobre o aluno"
                                    className="input input-bordered"
                                />
                            </td>

                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        </tr>

                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                            <span className="text-3xl">H</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">Aluno</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Hart Hagerty
                                <br />
                                <input
                                    type="text"
                                    placeholder="Sobre o aluno"
                                    className="input input-bordered"
                                />
                            </td>

                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        </tr>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                            <span className="text-3xl">H</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">Aluno</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Hart Hagerty
                                <br />
                                <input
                                    type="text"
                                    placeholder="Sobre o aluno"
                                    className="input input-bordered"
                                />
                            </td>

                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        </tr>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                            <span className="text-3xl">H</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">Aluno</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Hart Hagerty
                                <br />
                                <input
                                    type="text"
                                    placeholder="Sobre o aluno"
                                    className="input input-bordered"
                                />
                            </td>

                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <button className="btn glass">Enviar</button>
                            </th>
                        </tr>

                    </tfoot>
                </table>
            </div>
        </div>
    );
};



export default function Dashboard() {
    return (
        <div className="overflow-x-auto  mx-auto container">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sobre o aluno</th>
                        <th>faltas</th>
                        <th>presenças</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">João Pereira</div>
                                    <div className="text-sm opacity-50">Aluno</div>
                                </div>

                            </div>
                        </td>
                        <td>
                            João Pereira
                            <br />
                            <input type="text" placeholder="Atestados " className="input input-bordered" />
                        </td>

                        <th>
                            <label>
                            <input type="radio" name="radio-1" className="checkbox" defaultChecked />
                            
                            </label>    
                        </th>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                    </tr>
                    <tr>

                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">João Pereira</div>
                                    <div className="text-sm opacity-50">Aluno</div>
                                </div>

                            </div>
                        </td>
                        <td>
                            João Pereira
                            <br />
                            <input type="text" placeholder="Atestados " className="input input-bordered" />
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
                    <tr>

                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">João Pereira</div>
                                    <div className="text-sm opacity-50">Aluno</div>
                                </div>

                            </div>
                        </td>
                        <td>
                            João Pereira
                            <br />
                            <input type="text" placeholder="Atestados " className="input input-bordered" />
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
                    <tr>

                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">João Pereira</div>
                                    <div className="text-sm opacity-50">Aluno</div>
                                </div>

                            </div>
                        </td>
                        <td>
                            João Pereira
                            <br />
                            <input type="text" placeholder="Atestados " className="input input-bordered" />
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
            </table>
        </div>
    )
}
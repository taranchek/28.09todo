import { useEffect } from "react";

export default function Users () {
    
    // const users = [
    //     {
    //         name: 'Анна',
    //         surname: 'Гагина',
    //         thirname: 'Андреевна',
    //         age: 19,
    //         phone: '89646720045',
    //     },
    //     {
    //         name: 'Татьяна',
    //         surname: 'Платонова',
    //         thirname: 'Алексеевна',
    //         age: 18,
    //         phone: '89646720045',
    //     },
    //     {
    //         name: 'Милана',
    //         surname: 'Олейникова',
    //         thirname: 'Олеговна',
    //         age: 19,
    //         phone: '89646720055',
    //     }
    // ];

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                setUsers(data.data)
            })
            .catch(e => {
                console.log('Ошибка', e.massage);
            })
    })
    {users.length >0 ? <>
        {users.map((el,id) => (
            <div className="user" key={id}></div>
        ))}
        </> : ''}
    return (
        <>
            <div className="a">
                {users.map((el,id) => (
                    <div className="user" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{el.name} {el.surname} {el.thirname}</h5>
                                <p className="card-text">Возраст: {el.age}</p>
                                <p className="card-text">Телефон: {el.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};



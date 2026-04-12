// [
//     {
//         "0": {
//             "userId": 1,
//             "name": "Nguyễn Văn A"
//         },
//         "1": {
//             "userId": 2,
//             "name": "Trịnh Hồng M"
//         },
//         "2": {
//             "userId": 3,
//             "name": "Lạc Khôi B"
//         },
//         "_id": "69dbad56a705c97f211fe10d"
//     }
// ]

const UserCard = (props) => {
    const data = props.data
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-lg font-semibold">User ID: {data.userId}</p>
            <p className="text-lg font-semibold">Name: {data.name}</p>
        </div>
    )
}

export default UserCard

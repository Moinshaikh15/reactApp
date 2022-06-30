
function UserCard(props) {
    return (
        <div className="card">
            <div>
                <img src={props.user.picture.medium} alt='image' />
            </div>

            <div className="info">
                <span className="bold">{props.user.name.title}  {props.user.name.first} {props.user.name.last} </span>{props.user.email}
            </div>
        </div>
    )
}

export default UserCard
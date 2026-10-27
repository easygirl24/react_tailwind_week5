function UserCard ({user}) {
    return (
        <article className="user-card">
            <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
            <h2>{user.name}</h2>
            <p className="user-role">{user.role}</p>
            <p>{user.email}</p>
        </article>
    );
}

export default UserCard;
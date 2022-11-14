function Profile(props) {
    console.log(props)
    return <h6> Name : {props.name} {props.means}
        {props.children}</h6>
}
export default Profile;


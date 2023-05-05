import style from "./UserInfo.module.css"

const UserInfo = (props: any) => {
  const { name, phone, email } = props;

  return (
  <div className={style.container}>
    <h2>User Info</h2>
    <p>Name: {name}</p>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
  </div>
  );
};

export default UserInfo;

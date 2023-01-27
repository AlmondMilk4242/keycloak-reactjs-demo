import UserService from "../services/UserService";
import { Button } from "@mui/material";

const Welcome = () => (
  <div className="jumbotron">
    <h1>Hello Anonymous!</h1>
    <p className="lead">Please authenticate yourself!</p>
    <p>
      <Button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</Button>
    </p>
  </div>
)

export default Welcome

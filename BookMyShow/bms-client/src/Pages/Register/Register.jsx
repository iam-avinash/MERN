import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { Form } from "antd";
export default function Register() {
  return (
    <>
      {/* <div>
        <Form>
          <Form.Item
            label="Name"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <input type="text" placeholder="User Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <input type="text" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" placeholder="Password" />
          </Form.Item>
        </Form>
      </div> */}
      <div className="flex justify-center h-screen items-center bg-primary">
        <div className="card p-3 w-400">
          <h1 className="text-xl mb-1">
            Welcome to Movie Shows! Please Register
          </h1>
          <hr />
          <Form layout="vertical" className="mt-1" onFinish={() => {}}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <input type="text" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <input type="email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <input type="password" />
            </Form.Item>

            <div className="flex flex-col mt-2 gap-1">
              <Button fullWidth title="REGISTER" type="submit" />
              <Link to="/login" className="text-primary">
                {" "}
                Already have an account? Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

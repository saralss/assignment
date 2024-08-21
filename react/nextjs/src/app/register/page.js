import { Button, Card, CardBody, DatePicker, Image, Input } from "@nextui-org/react"
import Link from "next/link"

const register = ()=> {
  return (
    <div className="flex justify-center items-center">
      <div class="h-500 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <Card className="flex w-96 p-4 m-12">
          <Image
      width={300}
      alt="NextUI hero Image"
      src="react/nextjs/public/khusi_ko_paila.png"
    />
      <CardBody className="flex gap-2">
    <Input placeholder="Enter Full Name"/>
    <Input placeholder="Enter Email"/>
    <Input placeholder="Enter Phone Number"/>
    <DatePicker  label="Birth date"  />
    <Input placeholder="enter password"/>

    <Input placeholder="Enter Confirm Password"/>

    <Button className="bg-blue-400 text-white">Register</Button>
    <p>Already have an account? <Link href="/">Login</Link>  instead</p>
    </CardBody>
    </Card>
    </div>
    </div>
  )
}
export default register

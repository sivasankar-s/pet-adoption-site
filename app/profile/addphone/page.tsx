// "use client";

import prisma from "../../prsima";
import { getServerSession } from "next-auth";
import { updatePhone } from "../../actions";
import SubmitButton from "../../components/SubmitButton";

const AddPhone = async () => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
    select: {
      phoneNumber: true,
    },
  });

  // const { status, data: session } = useSession();
  // const email = session?.user?.email;
  // const phnRef = useRef<HTMLInputElement>(null);

  // const [phone, setPhone] = useState("");
  // const [isUpdated, setUpdate] = useState(false);

  // let phone = "";

  // const phnReqData = fetch("/api/addPhone", { method: "GET" })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setPhone(data.phoneNumber);
  // console.log(data.phoneNumber);
  // });

  // .then((data) => console.log(data));
  // console.log(phnReqData.json);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   //phnRef.current.value;
  //   const phoneNumber = phnRef.current?.value;
  //   const data = { email, phoneNumber };
  //   console.log(data);
  //   const res = await fetch("/api/addPhone", {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //   });

  //   if (res.status === 200) {
  //     setUpdate(true);
  //   }
  // };

  return (
    <div className=" p-8 rounded shadow-md h-72">
      <h1 className="text-xl font-semibold">
        {user?.phoneNumber ? "Edit" : "Add "} Phone Number
      </h1>
      {/* {phone} */}
      <form action={updatePhone} className=" ">
        <input
          className="p-4 mt-3 mr-5 border-b border-b-black outline-none"
          name="phn"
          // ref={phnRef}
          type="text"
          defaultValue={user?.phoneNumber as string}
        />
        <SubmitButton toastMessage="Phone Number Added" />
      </form>
    </div>
  );
};

export default AddPhone;

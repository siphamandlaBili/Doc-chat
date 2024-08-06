import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

const page = ()=> {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 bg-gray-200 font-extra-light text-indigo-600">
        My Documents
      </h1>

      <Documents/>
    </div>
  )
}

export default page

import PromptCard from "./PromptCard";

//TODO: continue starting from 2:53
const Profile = ({name,desc,data,handleEdit,handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      
      <div className="prompt_layout mt-10">
      {data.map(prompt =>(
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleEdit={()=> handleEdit && handleEdit(prompt)}
          handleDelete={()=> handleDelete && handleDelete(prompt)}
          />
      ))}
    </div>
    </section>
  )
}

export default Profile;
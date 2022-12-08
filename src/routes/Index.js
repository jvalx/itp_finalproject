import { useLoaderData , Link, useNavigate} from "react-router-dom";
import PostCard from '../PostCard'
import Modal from "../Modal";
import { useState } from "react";


export default function Index() {
  const navigate = useNavigate();
  const posts =  useLoaderData();
  console.log("inside of index" + useLoaderData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const goToContact = () => {
    // 👇️ navigate to /
    navigate(`/contact`);
  
  };
  return (
    <div className="container">
       
      <h1>Projects</h1>
      
      <div>
      <button
        variant="primary"
        type="button"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Click here for more information!
      </button>

      {isModalOpen && (
        <Modal
          title="I can see that you're interested!"
          onClose={() => {
            setIsModalOpen(false);
          }}
        > 
          <button onClick = {goToContact} variant="primary">Feel free to contact me!</button>
        </Modal>
      )}
    </div>


      <div>
        {posts.map((post) => {
          
          return <PostCard post={post} key={post.id} src={post.path}/>;
          
        })}
        
       {/* ${posts[0].id}; */}
      </div>

      <div id="modal-container">
      </div>
      
    </div>
  );
}

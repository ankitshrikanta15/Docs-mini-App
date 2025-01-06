import { FaRegFileAlt} from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className="relative flex-shrink-0  w-60 h-72 rounded-2xl bg-zinc-300 px-5 py-10 overflow-hidden cursor-grab active:cursor-grabbing">
      <FaRegFileAlt />
      <p className="text-xs mt-5 text-medium font-semibold leading-tight font-display">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
            {data.close ? <IoClose size=".7em" color="#fff" /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data?.tag?.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center font-semibold`}>
            <h3 className="text-sm">{data?.tag?.tagTitle}</h3>
          </div>
          )
        }
      </div>
    </motion.div>
  )
}

export default Card;
import { motion } from "framer-motion";

const InstructorItem = ({ item }) => {
  const { name, image, email } = item;

  return (
    <motion.div
      className="flex flex-col-reverse items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mt-3">
        <motion.h3
          className="text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {email}
        </motion.p>
      </div>
      <motion.img
        className="h-[260px] w-[260px] rounded-full object-cover bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1"
        src={image}
        alt=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </motion.div>
  );
};
export default InstructorItem;

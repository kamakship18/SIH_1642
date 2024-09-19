import Image from "next/image";

const WaitingPageForStartUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Image
        src="/waitingForReview.png"
        width={500}
        height={500}
        alt="waiting for review"
        priority={true}
      />
      <h1 className="text-3xl font-semibold text-gray-800 mt-8 text-center">
        Your startup is under review. Please wait for approval.
      </h1>
    </div>
  );
};

export default WaitingPageForStartUp;

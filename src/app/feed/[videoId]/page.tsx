interface PageProps {
  params: Promise<{ videoId: string }>;
}

const page = async ({ params }: PageProps) => {
  console.log("Where am I?");
  const { videoId } = await params;
  return <div>Feed page: {videoId}</div>;
};

export default page;

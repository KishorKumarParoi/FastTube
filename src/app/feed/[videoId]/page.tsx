interface PageProps {
  params: Promise<{ videoId: string }>;
}

const page = async ({ params }: PageProps) => {
  const { videoId } = await params;
  console.log("videoId", videoId);
  return <div>Feed page: {videoId}</div>;
};

export default page;

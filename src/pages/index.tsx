import { api } from "../utils/api";
import { type NextPage } from "next";
import { useEffect, useState } from "react";

import HeaderComponent from "../components/header";
import ContentComposition from "../compositions/content";

const Home: NextPage = () => {
  const [courses, setCourses] = useState<any>([]);
  const { data, isLoading } = api.course.getAll.useQuery();

  useEffect(() => {
    setCourses(data);
  }, [isLoading]);

  return (
    <>
      <div className="bg-rose-400 p-1" />
      <div className="relative z-50 mx-24 lg:pt-8">
        <div className="mb-5 lg:grow lg:basis-0">
          <img
            width={170}
            src="https://uploads-ssl.webflow.com/635ac9c83d23ae5a457e93b6/635acf381f7b244de79233c9_fuxamWebLogo.svg"
          />
        </div>

        <HeaderComponent />
        <ContentComposition courses={courses} />
      </div>
      <div
        style={{ zIndex: 99 }}
        className=" fixed bottom-0 w-full bg-rose-400 p-1"
      />
    </>
  );
};

export default Home;

import NewsDetails from "@/app/components/NewsDetails/NewsDetails";
import { api } from "@/app/lib/middleware/apiInceptor";
import { EVENTS } from "@/app/lib/services";
import React from "react";

export default async function page({ params }) {
  const res = await api.get(`${EVENTS}/${params.id}`);
  console.log(res);
  const news = res.data.payload;
  return (
    <div>
      <NewsDetails
        image={news.imageUrl}
        title={news.title}
        content={news.description}
      />
    </div>
  );
}

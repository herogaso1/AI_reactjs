import React from "react";

const HistoryList = () => {
  return (
    <main class="container mx-auto px-4 py-12">
      <div class="grid gap-6">
        <h1 class="text-3xl font-bold">Hi, here is your history</h1>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div class="bg-card w-full text-card-foreground gap-6 justify-between rounded-xl border p-6 shadow-sm">
            <h2 class="text-2xl font-bold mb-4 text-ellipsis overflow-hidden whitespace-nowrap">
              cau chuyen ve meo và chuột
            </h2>
            <p class="text-sm text-ellipsis line-clamp-3">
              {" "}
               mèo để bảo
              toàn mạng sống. Tuy nhiên, khoa học cũng chỉ ra rằng không phải
              tất cả các con mèo đều có bản năng săn chuột mạnh mẽ. Một số con
              mèo, đặc biệt là những con được nuôi dưỡng từ nhỏ trong môi trường
              an toàn, có thể không hề hứng thú với việc săn bắt chuột. Thậm
              chí, chúng có thể sống hòa thuận với chuột, đặc biệt là nếu chúng
              được nuôi dưỡng cùng nhau từ nhỏ. 3. Những Câu Chuyện Cảm Động Phá
              Vỡ Định Kiến: Mèo và Chuột Có Thể Là Bạn? Trong thế giới hiện đại,
              chúng ta đã chứng kiến nhiều câu chuyện cảm động về mèo và chuột,
              phá vỡ định kiến về mối thù truyền kiếp giữa hai loài. Những câu
              chuyện này chứng minh rằng tình bạn và sự đồng cảm có thể vượt qua
              mọi rào cản, kể cả sự khác biệt về loài. Những bức ảnh và video
              lan truyền trên mạng: Đã có rất nhiều hình ảnh và video ghi lại
              cảnh mèo và chuột chơi đùa, âu yếm nhau, thậm chí là ngủ cùng
              nhau. Những hình ảnh này khiến chúng ta phải suy nghĩ lại về mối
              quan hệ giữa mèo và chuột. Những câu chuyện có thật về mèo và
              chuột sống chung hòa thuận: Có những người nuôi mèo và chuột cùng
              nhau và chúng sống chung rất hòa thuận. Chuột không hề sợ mèo, và
              mèo cũng không hề có ý định săn bắt chuột. Bài học về sự thấu hiểu
              và lòng trắc ẩn: Những câu hấy rằng tình
              bạn có thể nảy sinh ở những nơi tưởng chừng như không thể. Quan
              trọng là chúng ta phải mở lòng, thấu hiểu và trân trọng những khác
              biệt của người khác. 4. Bài Học Rút Ra: Mèo và Chuột Trong Cuộc
              Sống Hằng Ngày Câu chuyện về mèo và chuột không chỉ là một câu
              chuyện về hai loài vật, mà còn là một ẩn dụ về cuộc sống. Nó cho
              chúng ta thấy rằng: Sự khác biệt không nhất thiết dẫn đến thù
              địch: Mèo và chuột có những bản năng và đặc điểm khác nhau, nhưng
              điều đó không có nghĩa là chúng không thể sống hòa thuận với nhau.
              Sự đồng cảm và thấu hiểu là chìa khóa để giải quyết xung đột: Khi
              chúng ta cố gắng hiểu người khác và đặt mình vào vị trí của họ,
              chúng ta sẽ dễ dàng tìm ra giải pháp cho những mâu thuẫn. Tình bạn
              có thể nảy sinh ở những nơi bất ngờ nhất: Đừng giới hạn mình trong
              những khuôn khổ, hãy mở lòng đón nhận những mối quan hệ mới và bạn
              sẽ ngạc nhiên trước những gì bạn khám phá ra. Kết Luận: Câu chuyện
              về mèo và chuột là một câu chuyện muôn thuở, chứa đựng nhiều ý
              nghĩa sâu sắc. Nó không chỉ là một câu chuyện về cuộc đối đầu giữa
              hai loài vật, mà còn là một câu chuyện về tình bạn, sự thấu hiểu
              và lòng trắc ẩn. Hãy để câu chuyện này nhắc nhở chúng ta rằng, dù
              có những khác biệt, chúng ta vẫn có thể sống hòa thuận và yêu
              thương nhau. Và biết đâu, trong cuộc sống, chúng ta sẽ gặp được
              những người bạn tuyệt vời, những người mà chúng ta không ngờ tới,
              giống như chú mèo và chú chuột trong những câu chuyện cảm động mà
              chúng ta vừa kể. Hãy mở lòng và đón nhận!
            </p>
            <div class="flex justify-start gap-2 mt-4">
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-eye w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-destructive text-destructive-foreground px-4 py-2 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash2 lucide-trash-2 w-4 h-4 stroke-amber-50"
                  aria-hidden="true"
                >
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                  <path d="M3 6h18"></path>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HistoryList;

import Star from "../icons/star";

const Rating = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="font-semibold text-xl">Rating</h2>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-4">
        <div className="flex flex-col items-start justify-center min-h-24">
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-2xl font-semibold">4.0</h2>
            <span className="text-xl text-muted-foreground">/</span>
            <span className="text-muted-foreground">5</span>
          </div>
          <div className="flex flex-row items-center gap-1 min-w-[7rem]">
            <Star height="20px" width="20px" color="#cfda31" />
            <Star height="20px" width="20px" color="#cfda31" />
            <Star height="20px" width="20px" color="#cfda31" />
            <Star height="20px" width="20px" color="#cfda31" />
            <Star height="20px" width="20px" color="gray" />
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <div className="gap-2 lg:min-h-8 flex flex-row items-center">
            <div className="flex flex-row items-center gap-1 min-w-[7rem]">
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
            </div>
            <div className="w-full flex flex-row items-center gap-2">
              <div className="w-[12rem] h-4 bg-secondary_color/40">
                <div className="h-full w-full bg-[#cfda31]"></div>
              </div>
              <span>1</span>
            </div>
          </div>
          <div className="gap-2 lg:min-h-8 flex flex-row items-center">
            <div className="flex flex-row items-center gap-1 min-w-[7rem]">
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="gray" />
            </div>
            <div className="w-full flex flex-row items-center gap-2">
              <div className="w-[12rem] h-4 bg-secondary_color/40">
                <div className="h-full w-0 bg-[#cfda31]"></div>
              </div>
              <span>0</span>
            </div>
          </div>
          <div className="gap-2 lg:min-h-8 flex flex-row items-center">
            <div className="flex flex-row items-center gap-1 min-w-[7rem]">
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="gray" />
              <Star height="15px" width="20px" color="gray" />
            </div>
            <div className="w-full flex flex-row items-center gap-2">
              <div className="w-[12rem] h-4 bg-secondary_color/40">
                <div className="h-full w-0 bg-[#cfda31]"></div>
              </div>
              <span>0</span>
            </div>
          </div>
          <div className="gap-2 lg:min-h-8 flex flex-row items-center">
            <div className="flex flex-row items-center gap-1 min-w-[7rem]">
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="gray" />
              <Star height="15px" width="20px" color="gray" />
              <Star height="15px" width="20px" color="gray" />
            </div>
            <div className="w-full flex flex-row items-center gap-2">
              <div className="w-[12rem] h-4 bg-secondary_color/40">
                <div className="h-full w-0 bg-[#cfda31]"></div>
              </div>
              <span>0</span>
            </div>
          </div>
          <div className="gap-2 lg:min-h-8 flex flex-row items-center">
            <div className="flex flex-row items-center gap-1 min-w-[7rem]">
              <Star height="15px" width="20px" color="#cfda31" />
              <Star height="15px" width="20px" color="gray" />
              <Star height="15px" width="20px" color="gray" />
              <Star height="15px" width="20px" color="gray" />
              <Star height="15px" width="20px" color="gray" />
            </div>
            <div className="w-full flex flex-row items-center gap-2">
              <div className="w-[12rem] h-4 bg-secondary_color/40">
                <div className="h-full w-0 bg-[#cfda31]"></div>
              </div>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rating;

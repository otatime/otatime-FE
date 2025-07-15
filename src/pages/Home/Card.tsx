export default function Card() {
  return (
    <div className="w-[548px] h-72 bg-neutral-800 rounded-[10px] border border-zinc-800">
      <div>
        <img
          className="w-[548px] h-28 rounded-tl-[10px] rounded-tr-[10px]"
          src="https://placehold.co/548x111"
        />
      </div>
      <div className="justify-start text-white text-base font-bold font-['Inter']">
        SPY×FAMILY - 2025년 8월 9일부터 개최! (가상)
      </div>
      <div>{/* 날짜 */}</div>
      <div className="w-[488px] justify-start text-neutral-400 text-sm font-normal font-['Inter']">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      {/*태그 */}
    </div>
  )
}

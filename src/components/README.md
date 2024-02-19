_Search funtion_

```JavaScript
const Search = () => {
    const [show, setShow] = useState(false);
    const { search } = useSelector((state) => state.products);
    const inputRef = useRef(null);
    const parentRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (show) {
       inputRef.current.focus();
        }
    }, [show]);

    ClickOutside(() => {
        setShow(false);
    }, parentRef);

    return (
      <div
        ref={parentRef}
        style={{ transition: "0.3s ease" }}
        className={`flex items-center rounded-3xl p-2  h-10 text-[var(--blue)] ${
            show
            ? "border border-[var(--blue)] shadow-[0px_0px_8px_3px] shadow-slate-400"
            : "border border-transparent"
        }`}
      >
          <FaSearch
            data-tooltip-id="my-tooltip"
            data-tooltip-content="search, name/category"
            data-tooltip-place="top"
            size={20}
            onClick={() => {
              setShow(!show);
            }}
            className="cursor-pointer"
          />
          <input
            ref={inputRef}
            type="text"
            value={search}
            style={{ transition: "0.3s ease" }}
            className={`${
              show ? "sm:w-96 w-40" : "w-0"
            } px-2 text-black focus:outline-0 border-0 bg-transparent`}
            onChange={(e) => {
              const value = e.target.value;
              dispatch(setSearch(value));
            }}
          />
      </div>
    );
};
```

_Filter Function_

```JavaScript
const Filter = ({ filter, setFilter, categories }) => {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const filterProducts = (category) => {
    setFilter(category);
    setShow(false);
  };

  ClickOutside(() => {
    setShow(false);
  }, inputRef);

  return (
    <div ref={inputRef}>
      <div className="flex flex-col items-center group/show select-none">
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Category filter"
          data-tooltip-place="top"
          className="text-[var(--blue)] text-lg font-bold flex items-center gap-2"
          onClick={() => {
            setShow(!show);
          }}
        >
          Category <FaFilter size="20" />
        </button>
        <div
          style={{ transition: "0.2s linear", width: show && "100%" }}
          className="group-hover/show:w-full w-0 h-[2px] bg-[var(--blue)]"
        ></div>
      </div>

      <div
        style={{ transition: "0.5s ease-in" }}
        className={`fixed top-16 left-0 z-10 ${
          show ? "w-full" : "w-0"
        } h-full bg-slate-300 overflow-x-hidden`}
      >
        <div className="flex items-center justify-end p-10">
          <div
            className="text-white hover:text-[var(--blue)] pr-4 cursor-pointer"
            onClick={() => {
              setShow(false);
            }}
          >
            <FaTimes size="30" />
          </div>
        </div>

        <ul className="flex flex-col items-center justify-center">
          {categories?.map((c, i) => (
            <li
              className={`px-10 py-4 cursor-pointer text-2xl hover:text-white ${
                filter === c.category ? " text-white" : "text-[var(--blue)]"
              }`}
              key={i}
              onClick={() => {
                filterProducts(c.category);
              }}
            >
              {FLConverter(c.category)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
```

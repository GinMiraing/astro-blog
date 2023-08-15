const FooterNoteItem = ({ item }: { item: string }) => {
  return <span className="text-pink">{`[${item}]`}</span>;
};

export default FooterNoteItem;

import styles from "./pagination.module.css";
import { IconButton } from "../iconbutton";
import { Icon } from "../icon";
import { Size } from "../../types";

export type PaginationProps = {
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
  size?: Size;
  skipMode?: boolean;
  showMaxCount?: boolean;
};

enum PageCangeType {
  next,
  previous,
  last,
  first,
}

export default function Pagination({
  totalPages,
  onPageChange,
  currentPage,
  skipMode,
  size = "medium",
  showMaxCount = false,
}: PaginationProps) {
  const handlePageChange = (changeType: PageCangeType) => {
    const newPage =
      changeType === PageCangeType.first
        ? 1
        : changeType === PageCangeType.last
          ? totalPages
          : changeType === PageCangeType.next
            ? currentPage + 1
            : currentPage - 1;

    onPageChange(newPage);
  };

  const shouldDisableButton = (changeType: PageCangeType) => {
    const conditions = {
      [PageCangeType.first]: currentPage <= 1,
      [PageCangeType.last]: currentPage >= totalPages,
      [PageCangeType.next]: currentPage >= totalPages,
      [PageCangeType.previous]: currentPage <= 1,
    };

    return conditions[changeType];
  };

  return (
    <div className={`${styles.pagination} ${styles[size]}`}>
      {skipMode && (
        <IconButton
          size={size}
          icon={<Icon name="chevron-double-left" />}
          onClick={() => handlePageChange(PageCangeType.first)}
          disabled={shouldDisableButton(PageCangeType.first)}
          id="pagination-previous"
          variant="tertiary"
          label="Go to last"
          title=""
        />
      )}
      <IconButton
        size={size}
        icon={<Icon name="chevron-left" />}
        onClick={() => handlePageChange(PageCangeType.previous)}
        disabled={shouldDisableButton(PageCangeType.previous)}
        id="pagination-previous"
        variant="tertiary"
        label=""
        title=""
      />
      <span>
        Page {currentPage} <span>{showMaxCount && `of ${totalPages}`}</span>
      </span>
      <IconButton
        size={size}
        id="pagination-next"
        icon={<Icon name="chevron-right" />}
        onClick={() => handlePageChange(PageCangeType.next)}
        disabled={shouldDisableButton(PageCangeType.next)}
        variant="tertiary"
        label="pagination-next"
        title=""
      />
      {skipMode && (
        <IconButton
          size={size}
          icon={<Icon name="chevron-double-right" />}
          onClick={() => handlePageChange(PageCangeType.last)}
          disabled={shouldDisableButton(PageCangeType.last)}
          id="pagination-skip-first"
          variant="tertiary"
          label="Go to first"
          title=""
        />
      )}
    </div>
  );
}

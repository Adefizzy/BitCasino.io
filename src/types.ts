export type ICoinProps = {
    coinId: string;
    marketSymbol: string;
    ticker: {
        lastPrice: string;
    };
    loading?: false;
}

export type IUseCoin = {
    deleteCoin: (param: string) => void;
    addCoin: (param: string) => Promise<void>;
    coins: ICoinProps[];
    isLoading: boolean
}

export type ISingleCoinProps = {
    coin: ICoinProps;
    onDeleteCoin: (coinId: string) => void;
};

export type ICoinListProps = {
    coins: ICoinProps[];
    onClick: (coinId: string) => void;
}

export type IFlexProps = {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    height?: string;
    width?: string;
}

export type IButtonProps = {
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    isDelete?: boolean;
    isAdd?: boolean;
    width?: string;
    children: React.ReactNode
};

export type IChildrenProps = {
    children: React.ReactNode
};


export type IModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void
};


export type ButtonStyleProps = {
    isDelete?: boolean,
    isAdd?: boolean,
    width?: string
}

export type ICloseIconProps = {
    onClick: () => void
}

export type ITextFieldProps = {
    onChange: (value: string) => void,
    value: string
}
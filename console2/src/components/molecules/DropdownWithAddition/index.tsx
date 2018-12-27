/*-
 * *****
 * Concord
 * -----
 * Copyright (C) 2017 - 2018 Walmart Inc.
 * -----
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =====
 */
import * as React from 'react';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

interface State {
    stateOptions: any[];
}

interface Props {
    required: boolean;
    value?: any;
    options: any[];
    multiple: boolean;
    allowAdditions: boolean;
    submitting?: boolean;
    completed?: boolean;
    onChange: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
}

const toState = (options: any[]): State => {
    return { stateOptions: options };
};

class DropdownWithAddition extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = toState(this.props.options);

        this.handleAddition = this.handleAddition.bind(this);
    }

    handleAddition = (e: any, { value }: DropdownProps) => {
        this.setState({
            stateOptions: [{ text: value, value }, ...this.state.stateOptions]
        });
    };

    render() {
        const {
            multiple,
            allowAdditions,
            value,
            required,
            submitting,
            completed,
            onChange
        } = this.props;

        return (
            <>
                <Dropdown
                    clearable={!required}
                    selection={true}
                    multiple={multiple}
                    name={name}
                    disabled={submitting || completed}
                    value={value}
                    options={this.state.stateOptions}
                    search={true}
                    allowAdditions={allowAdditions}
                    onChange={onChange}
                    onAddItem={this.handleAddition}
                />
            </>
        );
    }
}

export default DropdownWithAddition;

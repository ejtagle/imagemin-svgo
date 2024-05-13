import {Buffer} from 'node:buffer';
import isSvg from 'is-svg';
import {optimize} from 'svgo';

const imageminSvgo = options => async buffer => {
	options = {
		multipass: true,
		...options,
	};

	if (!isSvg(Buffer.isBuffer(buffer) ? buffer.toString() : buffer)) {
		return buffer;
	}

	if (Buffer.isBuffer(buffer)) {
		buffer = buffer.toString();
	}

	const {data} = optimize(buffer, options);
	return Buffer.from(data);
};

export default imageminSvgo;

import { ACloudRecource } from "../cloudResruce";
import * as mackerelModel from "../mackerel/api/model/models";
import AWS from "aws-sdk";

export class S3 extends ACloudRecource {
  constructor(mackerelHost: mackerelModel.Host) {
    super(mackerelHost, "AWS::S3::Bucket");
  }
  public static of(mackerelHost: mackerelModel.Host): S3 {
    return new S3(mackerelHost);
  }
  async fetchInternal(): Promise<any> {
    const awsS3 = new AWS.S3();
    // Host.name is S3 Bucket name.
    // Host.customIdentifier is ARN.
    const req = await awsS3
      .headBucket({ Bucket: this.mackerelHost.name })
      .promise();
    if (!req.$response.error) {
      return req.$response.data;
    }
    if (req.$response.httpResponse.statusCode === 404) {
        return undefined;
    }
    throw req.$response.error;
  }
}

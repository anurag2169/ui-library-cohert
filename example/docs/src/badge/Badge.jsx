import React from 'react';
import { Badge } from 'ui_library';
export default function Badge() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2 text-xl font-semibold">Normal Badges</h2>
        <div className="flex gap-4">
          <Badge variant="success" size="sm">
            Completed
          </Badge>
          <Badge variant="danger" size="md">
            Overdue
          </Badge>
          <Badge variant="outline" size="lg">
            Pending
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">Badge with Icon</h2>
        <div className="flex gap-4">
          <Badge variant="info" size="md" icon={<span>✔️</span>}>
            Success
          </Badge>
          <Badge variant="warning" size="md" icon={<span>⚠️</span>}>
            Warning
          </Badge>
          <Badge variant="danger" size="md" icon={<span>❌</span>}>
            Error
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">Dashed Border Badge</h2>
        <div className="flex gap-4">
          <Badge variant="default" size="sm" dashedBorder={true}>
            Dashed Default
          </Badge>
          <Badge variant="success" size="md" dashedBorder={true}>
            Dashed Success
          </Badge>
          <Badge variant="danger" size="lg" dashedBorder={true}>
            Dashed Danger
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">Badge as Button</h2>
        <div className="flex gap-4">
          <Badge variant="success" size="md" isButton={true}>
            Button Badge 1
          </Badge>
          <Badge variant="danger" size="md" isButton={true}>
            Button Badge 2
          </Badge>
          <Badge variant="warning" size="lg" isButton={true}>
            Button Badge 3
          </Badge>
        </div>
      </div>
    </div>
  );
}
